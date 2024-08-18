package dev.kim.jobs;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class JobAppService {

    //  Autowired instantiates class for us
    @Autowired
    private JobAppRepository jobAppRepository;

    //  Used to also talk to database (helpful with complex data)
    //  Form a dynamic query
    @Autowired
    private MongoTemplate mongoTemplate;

    /**
     * Returns all job applications from database
     * @return
     */
    public List<JobApp> allJobs() {
        System.out.println(jobAppRepository.findAll().toString());
        return jobAppRepository.findAll();
    }

    public Optional<JobApp> singleJob(String companyName) {

        return jobAppRepository.findJobByCompanyName(companyName);
    }


    public JobApp createJobApp(String companyName, String companyInfo, String jobTitle, String jobLink, String appStatus) {
        ObjectId id = new ObjectId();
        JobApp jobApp = jobAppRepository.insert(new JobApp(id, companyName, companyInfo, jobTitle, jobLink, appStatus));

//        mongoTemplate.insert(jobApp);

        return jobApp;


    }
}
