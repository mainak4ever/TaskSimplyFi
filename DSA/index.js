// Assignment 2:
// Q . Your son took a vacation through Europe without telling you. When the kid returned from the vacation you asked him where did he go. The kid told you: Dad I went to these cities: Amsterdam, Kiev, Zurich, Prague, Berlin, Barcelona.
// I used only train as transportation and these were the available tickets:
// Paris-Skopje, Zurich-Amsterdam, Prague-Zurich, Barcelona-Berlin, Kiev-Prague, Skopje-Paris, Amsterdam-Barcelona, Berlin-Kiev, Berlin-Amsterdam.
// You know that your kid started with Kiev
// Write a data structure and algorithm that will give you the route which your son was traveling.



function findRoute(tickets, startCity) {
    const graph = new Map();
  
        tickets.forEach(([src, dst]) => {
      if (!graph.has(src)) {
        graph.set(src, []);
      }
      graph.get(src).push(dst);
    });
  
    graph.forEach((value, key) => {
      value.sort();
    });
  
    const route = [];
  
   
    function dfs(currentCity) {
      while (graph.has(currentCity) && graph.get(currentCity).length > 0) {
        const nextCity = graph.get(currentCity).shift();
        dfs(nextCity);
      }
      route.push(currentCity);
    }
  
    dfs(startCity);
  
   
    if (route.length === tickets.length + 1) {
      return route.reverse();
    } else {
      return "No valid route found";
    }
  }
  
 
  const tickets = [
    ["Paris", "Skopje"], 
    ["Zurich", "Amsterdam"], 
    ["Prague", "Zurich"], 
    ["Barcelona", "Berlin"], 
    ["Kiev", "Prague"], 
    ["Skopje", "Paris"], 
    ["Amsterdam", "Barcelona"], 
    ["Berlin", "Kiev"], 
    ["Berlin", "Amsterdam"]
  ];
  const startCity = "Kiev";
  
  // Find and print the route
  const route = findRoute(tickets, startCity);
  console.log(route);
  
  