package org.aem.training.core.servlets;

import java.net.UnknownHostException;
import com.mongodb.BasicDBObject;
import com.mongodb.DB;
import com.mongodb.DBCollection;
import com.mongodb.MongoClient;
 
public class mongodbexample {
 
    public static void main(String[] args) {
        try {
             
            MongoClient mongoClient = new MongoClient("localhost");
             
            DB db = mongoClient.getDB("testdb");
            DBCollection table = db.getCollection("user");
            BasicDBObject document = new BasicDBObject();
            document.put("name", "abc");
            document.put("city", "mumbai");
            table.insert(document);
            System.out.println("\t + Data inserted ");
         
             
            
            mongoClient.close();
             
        } catch (UnknownHostException ex) {
            ex.printStackTrace();
        }
         
    }
}
