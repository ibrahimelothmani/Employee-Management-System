package com.ibrahim.employee.config;

import org.keycloak.adapters.springsecurity.authentication.KeycloakAuthenticationProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.session.NullAuthenticatedSessionStrategy;
import org.springframework.security.web.authentication.session.SessionAuthenticationStrategy;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.authority.mapping.SimpleAuthorityMapper;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Autowired
    public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
        // Set up Keycloak authentication provider
        KeycloakAuthenticationProvider keycloakAuthenticationProvider = new KeycloakAuthenticationProvider();
        keycloakAuthenticationProvider.setGrantedAuthoritiesMapper(new SimpleAuthorityMapper());
        auth.authenticationProvider(keycloakAuthenticationProvider);
    }

    @Bean
    public SessionAuthenticationStrategy sessionAuthenticationStrategy() {
        return new NullAuthenticatedSessionStrategy();  // Stateless session management
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .authorizeHttpRequests(auth -> auth
                        // Allow access to Swagger UI and API docs
                        .requestMatchers("/swagger-ui/**", "/v3/api-docs/**", "/swagger-ui/index.html").permitAll()
                        // Endpoint access permissions
                        .requestMatchers(HttpMethod.POST, "/api/employees/**").permitAll()  // Public POST
                        .requestMatchers(HttpMethod.GET, "/api/employees/{id}").authenticated()  // Authenticated GET
                        .requestMatchers(HttpMethod.PUT, "/api/employees/{id}").permitAll()  // Public PUT
                        .requestMatchers(HttpMethod.DELETE, "/api/employees/{id}").permitAll()  // Public DELETE
                        .requestMatchers(HttpMethod.POST, "/api/auth/**").permitAll()  // Public /api/auth endpoints (e.g., registration)
                        .requestMatchers(HttpMethod.GET, "/api/auth/login").permitAll()  // Public login endpoint
                        .anyRequest().permitAll()  // Allow all other requests
                )
                .csrf(AbstractHttpConfigurer::disable)  // Disable CSRF for testing (make sure to enable it properly in production)
                .sessionManagement(session -> session
                        .sessionCreationPolicy(SessionCreationPolicy.STATELESS));  // Stateless session management

        return http.build();
    }
}
