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
    String City = request.getParameter("City");
    String Address = request.getParameter("Address");
 
    com.adobe.cq.HandleForm hf = sling.getService(com.adobe.cq.HandleForm.class);
    hf.injestFormData(First,Last,City, Address);
 
 
%>