package com.example.credGo.controller;

import com.example.credGo.service.OpenAIService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/chat")
@CrossOrigin(origins = "http://localhost:3000")
public class ChatController {

    @Autowired
    private OpenAIService openAIService;

    @PostMapping
    public Map<String, String> chatWithBot(@RequestBody Map<String, String> request) {
        String message = request.get("message");
        String reply = openAIService.getChatResponse(message);

        Map<String, String> response = new HashMap<>();
        response.put("reply", reply);
        return response;
    }
}
