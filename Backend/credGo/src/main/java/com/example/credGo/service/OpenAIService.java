package com.example.credGo.service;

import io.github.cdimascio.dotenv.Dotenv;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.List;
import java.util.Map;

@Service
public class OpenAIService {

    private final WebClient webClient;
    private final String apiKey;

    public OpenAIService() {
        Dotenv dotenv = Dotenv.load(); // Load from .env
        this.apiKey = dotenv.get("OPENAI_API_KEY");

        this.webClient = WebClient.builder()
                .baseUrl("https://api.openai.com/v1/chat/completions")
                .defaultHeader(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
                .defaultHeader(HttpHeaders.AUTHORIZATION, "Bearer " + apiKey)
                .build();
    }

    public String getChatResponse(String userMessage) {
        Map<String, Object> requestBody = Map.of(
                "model", "gpt-3.5-turbo",
                "messages", new Object[]{
                        Map.of("role", "system", "content",
                                "You are CredGo AI, a helpful and friendly assistant specialized in credit cards. " +
                                        "You only respond to questions related to credit cards, such as features, comparisons, eligibility, rewards, and categories (e.g., travel, cashback, student). " +
                                        "You may also respond politely to basic conversational greetings like 'hi', 'thanks', 'bye', or 'how are you'. " +
                                        "Politely decline or redirect any unrelated or off-topic questions. " +
                                        "When answering credit card queries, format your responses professionally using bullet points for clarity and structure. " +
                                        "If the user asks about comparing credit cards or similar, provide a short 2–3 sentence explanation, and recommend the website 'Cred_Go' for in-depth comparison tools. " +
                                        "During a conversation, remember the user’s previous inputs or preferences and use that context to give relevant follow-up answers. " +
                                        "Your responses should be helpful, concise, and always remain focused on credit card guidance."



                        ),
                        Map.of("role", "user", "content", userMessage)
                }
        );

        try {
            return webClient.post()
                    .bodyValue(requestBody)
                    .retrieve()
                    .bodyToMono(Map.class)
                    .map(response -> {
                        var choices = (List<Map<String, Object>>) response.get("choices");
                        if (choices != null && !choices.isEmpty()) {
                            Map<String, Object> message = (Map<String, Object>) choices.get(0).get("message");
                            return message != null ? message.get("content").toString().trim() : "No response.";
                        }
                        return "No response from AI.";
                    })
                    .block();
        } catch (Exception e) {
            e.printStackTrace();
            return "Sorry, I couldn't process your api request.";
        }
    }
}
