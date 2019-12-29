{
  funciton createIssue(e)
  {
    var summary = e.values[1];
    var description = e.values[2];
    var priority = e.values[3];
    var assignee = e.values[4];
    var dueDate = e.values[5];
    
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
  
}
