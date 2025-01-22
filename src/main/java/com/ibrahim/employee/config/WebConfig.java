package com.ibrahim.employee.config;

import org.springframework.context.annotation.Configuration;

import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/api/**")  // Apply CORS settings for all API endpoints
                .allowedOrigins("http://localhost:3000")  // Allow requests from the React app
                .allowedMethods("GET", "POST", "PUT", "DELETE")  // Allow common HTTP methods
                .allowedHeaders("*");  // Allow all headers
    }
}

