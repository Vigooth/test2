<%--
  Created by IntelliJ IDEA.
  User: Gauth
  Date: 19/09/2016
  Time: 21:05
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>

<html>
<head>
    <title>Js-Test</title>
    <link href="resources/css/bootstrap.min.css" rel="stylesheet">

    <link href="/resources/css/main.css" rel="stylesheet"  type="text/css" />
</head>
<body >
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
            <div class="question">

            </div>




    </form>
</div>
</body>

<!-- jQuery -->
<script src="resources/js/jquery.js" type="text/javascript"></script>

<!-- Bootstrap Core JavaScript -->
<script src="resources/js/bootstrap.min.js" type="text/javascript"></script>
<script src="../../resources/js/home.js" type="text/javascript"></script>

</html>
