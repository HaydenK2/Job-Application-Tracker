package dev.kim.jobs;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/jobs")
public class JobsController {
    @Autowired
    private JobAppService jobAppService;
    @GetMapping("/")
    public String apiRoot() {
        System.out.println("home!");
        return "Hello World";
    }

    @GetMapping
    public ResponseEntity<List<JobApp>> getAllJobs() {
        return new ResponseEntity<List<JobApp>>(jobAppService.allJobs(), HttpStatus.OK);
    }


    /**
     *  filter all job applications by company Name
     * @param companyName
     * @return
     */
    @GetMapping("/{companyName}")
    public ResponseEntity<Optional<JobApp>> getSingleJob(@PathVariable String companyName) {
        return new ResponseEntity<Optional<JobApp>>(jobAppService.singleJob(companyName), HttpStatus.OK);
    }

    @PostMapping("/ja")
    public ResponseEntity<JobApp> createJobApp(@RequestBody Map<String, String> payload) {
        return new ResponseEntity<JobApp>(jobAppService.createJobApp(payload.get("companyName"), payload.get("companyInfo"), payload.get("jobTitle"), payload.get("jobLink"), payload.get("appStatus")), HttpStatus.OK);
    }






}
