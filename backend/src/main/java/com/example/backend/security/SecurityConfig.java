package com.example.backend.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;

/**
 * Configuration class for Spring Security settings in the backend application.
 * This class defines how the authentication and authorization are handled for web requests.
 */

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public InMemoryUserDetailsManager userDetailsService() {
        UserDetails user = User.withDefaultPasswordEncoder()
                .username("user01")
                .password("ushallnotpass")
                .roles("USER")
                .build();
        return new InMemoryUserDetailsManager(user);
    }

    /**
     * If we had more time, use details would be fetched from a database and passwords
     * would be securely encoded. We would also implement mechanisms for user registration and role management.
     */


    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .authorizeHttpRequests((requests) -> requests
                        .requestMatchers("/api/supplies/list").authenticated()
                        .anyRequest().permitAll()
                )
                .httpBasic(org.springframework.security.config.Customizer.withDefaults())
                .csrf((csrf) -> csrf.disable()); // For simplicity in this PoC, we disable CSRF
        return http.build();
    }
}