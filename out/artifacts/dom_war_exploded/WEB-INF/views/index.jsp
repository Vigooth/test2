<%--
  Created by IntelliJ IDEA.
  User: Gauth
  Date: 19/09/2016
  Time: 19:35
  To change this template use File | Settings | File Templates.
--%>

<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
  <title>$Title$</title>
  <link href="resources/css/bootstrap.min.css" rel="stylesheet">

  <link href="/resources/css/main.css" rel="stylesheet"  type="text/css" />
</head>
<body>
<div class="container">
  <div class="container">
    <h2 >Personnaliser son QCM (<input onclick="addQuestion()" id="nQuestion" type="number" style="width: 50px"> questions )</h2>
    <form class="form-horizontal">
      <%--Titre--%>
      <div class="form-group">
        <label class="col-sm-2 control-label">Titre</label>
        <div class="col-sm-10">
          <input class="form-control" id="focusedInput" type="text" value="">
        </div>
      </div>
      <div id="questions">
      </div>
    </form>
  </div>

  <div id="Q1">
    <div class="form-group">
      <label for="exampleInputEmail1">Email address</label>
      <input type="email" onclick="getParentId(this)" class="form-control" id="exampleInputEmail1" placeholder="Email">
    </div>
  </div>
</div>


</body>
<script src="resources/js/jquery.js" type="text/javascript"></script>

<!-- Bootstrap Core JavaScript -->
<script src="resources/js/bootstrap.min.js" type="text/javascript"></script>
<script src="../../resources/js/index.js" type="text/javascript"></script>

</html>
