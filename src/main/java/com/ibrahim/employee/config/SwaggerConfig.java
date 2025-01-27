package com.ibrahim.employee.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springdoc.core.GroupedOpenApi;
import org.springframework.context.annotation.ComponentScan;

@Configuration
public class SwaggerConfig {

    @Bean
    public GroupedOpenApi publicApi() {
        return GroupedOpenApi.builder()
                .group("public-api")
                .packagesToScan("com.ibrahim.employee.controllers")
                .pathsToMatch("/api/**")
                .build();
    }
}


//    Filtering API Endpoints
//    @Bean
//    public Docket api() {
//        return new Docket(DocumentationType.SWAGGER_2)
//                .select()
//                .apis(RequestHandlerSelectors.basePackage("com.example.controller"))
//                .paths(PathSelectors.ant("/api/**"))
//                .build();
//    }
// Custom Response Messages
//
//You can override the default response messages for HTTP methods globally.
//
//@Bean
//public Docket api() {
//return new Docket(DocumentationType.SWAGGER_2)
//.useDefaultResponseMessages(false)
//.globalResponses(HttpMethod.GET, Arrays.asList(
//new ResponseBuilder().code("500").description("Internal Server Error").build(),
//new ResponseBuilder().code("403").description("Forbidden").build()
//))
//.select()
//.apis(RequestHandlerSelectors.any())
//.paths(PathSelectors.any())
//.build();
//}