package dev.kim.jobs;

//  Data takes care of getters and setters
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Document(collection = "jobs")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class JobApp {

    @Id
    private ObjectId id;

    private String companyName;

    private String companyInfo;
    private String jobTitle;
    private String jobLink;
    private String appStatus;

}
