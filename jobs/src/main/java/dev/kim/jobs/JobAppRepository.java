package dev.kim.jobs;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

// Used to talk to database
@Repository
public interface JobAppRepository extends MongoRepository<JobApp, ObjectId> {
    public Optional<JobApp> findJobByCompanyName(String companyName);



}
