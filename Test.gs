{
  funciton createIssue(e)
  {
    var summary = e.values[1];
    var description = e.values[2];
    var priority = e.values[3];
    var assignee = e.values[4];
    var dueDate = e.values[5];
    var url = "https://localhost:8080/rest/api/latest/issue";
    
    var data = 
        {
          "fields":
          {
            "project":{"key":"TEST"},
            "summary":"Haris Korac",
            "description":"068030593 hari_93_korac@live.com",
            "priority":{"name":"High"},
            "assignee":{"name":"Test User"},
            "dueDate": "2019-12-29",
          }
        }
  };
  
  var load = JSON.stringify(data);
  
  var header = 
      { 
        "content-type": "application/json",
        "Accept": "application/json",
        "authorization": "Basic <testuser:Test123>"
      };
  
  var options = 
      { 
        "content-type": "application/json",
        "method": "POST",
        "headers": header,
        "payload": load
      };
  var response = UrlFetchApp.fetch(url, options);
  Logger.log(response.getContentText());

  var dataAll = JSON.parse(response.getContentText());
  var issueKey = dataAll.key
  Logger.log(dataAll)
}
