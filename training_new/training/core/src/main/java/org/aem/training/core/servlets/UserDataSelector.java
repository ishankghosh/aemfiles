package org.aem.training.core.servlets;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.SlingHttpServletResponse;
import org.apache.sling.api.servlets.SlingAllMethodsServlet;
import org.aem.training.core.servlets.HandleFormNewImp;
import java.io.IOException;

import javax.servlet.ServletException;

import org.apache.felix.scr.annotations.sling.SlingServlet;

@SuppressWarnings("serial")
@SlingServlet(resourceTypes = "sling/servlet/default", selectors = "getdata", extensions = "html", methods = "GET")

public class UserDataSelector extends SlingAllMethodsServlet{

	@Override
	protected void doGet(final SlingHttpServletRequest req, final SlingHttpServletResponse res)
	throws ServletException, IOException{
		res.getOutputStream().println("Get request");	
		String usrdata = HandleFormNewImp.userData;
		if(usrdata!=null){
			res.getOutputStream().println("User data - "+usrdata);	
		} else {
			res.getOutputStream().println("No data available");
		}
		
	}
}
