package dev.kim.jobs;

import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoCollection;
import org.bson.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.aggregation.Aggregation;
import org.springframework.data.mongodb.core.aggregation.AggregationResults;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CompanyService {


    @Autowired
    private CompanyRepository companyRepo;

    @Autowired
    private MongoTemplate mongoTemplate;


    @Autowired
    private MongoClient client;


    @Value("${env.MONGO_DATABASE}")
    private String databaseName;


    /**
     * Returns all companies from database
     * @return List of Company Objects
     */
    public List<Company> allCompanies() {
        System.out.println(companyRepo.findAll().toString());
        return companyRepo.findAll();
    }

    /**
     * Returns a list of Companies that one has applied to
     * @return List of Company objects
     */
//    public List<Company> appliedCompanies() {
//
//
//        final List<String> list = new ArrayList<>();
//        System.out.println(databaseName);
//        final MongoCollection<Document> companyCollection = client.getDatabase(databaseName).getCollection("companies");
//        final MongoCollection<Document> jobAppCollection = client.getDatabase(databaseName).getCollection("jobs");
//        List<JobApp> jobAppList =
//
//
//          data.find().map(Document::toJson).forEach(list::add);
//
//        return list;
//    }
}
