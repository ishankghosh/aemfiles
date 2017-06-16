package org.aem.training.core.servlets;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.apache.felix.scr.annotations.Component;
import org.apache.felix.scr.annotations.Service;
import org.apache.sling.api.servlets.SlingAllMethodsServlet;
import org.apache.sling.commons.json.JSONException;
import org.apache.sling.commons.json.JSONObject;

import java.net.UnknownHostException;
import com.mongodb.BasicDBObject;
import com.mongodb.DB;
import com.mongodb.DBCollection;
import com.mongodb.MongoClient;

//This is a component so it can provide or consume services
@SuppressWarnings("serial")
@Component
    
@Service
public class HandleFormNewImp extends SlingAllMethodsServlet implements HandleFormNew {

	/** Default log. */
    protected final Logger log = LoggerFactory.getLogger(this.getClass());
    static String userData = null;
    
    @Override
    public void injestFormData(String First, String Last,String Cellno,String Gender,
    		String Language,String DOB, String City,String Address) {         
        //Simply write out the values that are posted from the AEM form to the AEM log file
        log.info("Data posted from an AEM adaptive form - First: "+First +" Last: "+Last +" City: "+City +" Address "+Address) ;
        
        try {
            
            MongoClient mongoClient = new MongoClient("localhost");
            DB db = mongoClient.getDB("testdb");
            DBCollection table = db.getCollection("user");
            BasicDBObject document = new BasicDBObject();
            document.put("Firstname",First);
            document.put("Lastname",Last);
            document.put("Mobilenumber",Cellno);
            document.put("Gender",Gender);
            document.put("Language",Language);
            document.put("DOB",DOB);
            document.put("City",City);
            document.put("Address",Address);
            table.insert(document);           
            mongoClient.close();
             
        } catch (UnknownHostException ex) {
            ex.printStackTrace();
        }
        
        JSONObject obj=new JSONObject();    
        try {
			obj.put("Firstname",First);
			obj.put("Lastname",Last);
			obj.put("City",City);
			obj.put("Gender", Gender);
			obj.put("Language",Language);
			obj.put("DOB",DOB);
			obj.put("Address",Address);
			obj.put("Mobilenumber",Cellno);
			userData = obj.toString();			
			
		} catch (JSONException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}    
    	}
    
    
}
