<%@include file="/libs/fd/af/components/guidesglobal.jsp" %>
<%@include file="/libs/foundation/global.jsp"%>
<%@page import="com.day.cq.wcm.foundation.forms.FormsHelper,
             org.apache.sling.api.resource.ResourceUtil,
             org.apache.sling.api.resource.ValueMap" %>
<%@taglib prefix="sling"
                uri="http://sling.apache.org/taglibs/sling/1.0" %>
<%@taglib prefix="cq"
                uri="http://www.day.com/taglibs/cq/1.0"
%>
<cq:defineObjects/>
<sling:defineObjects/>
<%
 
    String First = request.getParameter("First");
    String Last = request.getParameter("Last");
 String Cellno = request.getParameter("Cellno");
String Gender = request.getParameter("Gender");
 String Language = request.getParameter("Language");
String DOB = request.getParameter("DOB");
    String City = request.getParameter("City");
    String Address = request.getParameter("Address");

    org.aem.training.core.servlets.HandleFormNew hf = sling.getService(org.aem.training.core.servlets.HandleFormNew.class);
    hf.injestFormData(First,Last,Cellno,Gender,Language,DOB,City, Address);
	
 
%>