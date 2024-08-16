package dev.kim.jobs;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class JobsController {
    @GetMapping("/")
    public String apiRoot() {
        System.out.println("home!");
        return "Hello World";

    }
}
