package dev.kim.jobs;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "companies")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Company {
    private ObjectId id;
    private String companyName;
    private String companyInfo;
    private String companyRating;


}
