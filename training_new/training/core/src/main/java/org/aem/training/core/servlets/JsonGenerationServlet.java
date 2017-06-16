package org.aem.training.core.servlets;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.SlingHttpServletResponse;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.servlets.SlingAllMethodsServlet;
import org.apache.sling.commons.json.JSONException;
import org.apache.sling.commons.json.jcr.JsonItemWriter;

import java.io.IOException;
import java.io.StringWriter;

import javax.jcr.Node;
import javax.jcr.RepositoryException;
import javax.servlet.ServletException;

import org.apache.felix.scr.annotations.sling.SlingServlet;

@SuppressWarnings("serial")
@SlingServlet(resourceTypes="sling/servlet/default",selectors="pagejson",extensions="html",methods="GET")

public class JsonGenerationServlet extends SlingAllMethodsServlet {
	
	@Override
	protected void doGet(final SlingHttpServletRequest req, final SlingHttpServletResponse res)
	throws ServletException, IOException{
		String pageUrl = req.getRequestURI();
		pageUrl = pageUrl.replace(".pagejson.html","");
		String pageContent = pageUrl + "/jcr:content";
		try{
			Resource resource = req.getResourceResolver().resolve(pageContent);
			Node pageNode = resource.adaptTo(Node.class);
			StringWriter stringWriter = new StringWriter();
			JsonItemWriter jsonWriter = new JsonItemWriter(null);
			if(pageNode != null){
				jsonWriter.dump(pageNode, stringWriter, -1, true);
			}
			
			String json = stringWriter.toString();
			res.getOutputStream().println(json);
		} catch (JSONException e){
			e.printStackTrace();
			
		} catch (RepositoryException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
				
	}
	
}
