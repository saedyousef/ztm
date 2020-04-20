class Graph
{
    constructor(){
        this.numberOfNodes = 0;
        this.adjacentList = {};
    }

    addVertix(node)
    {
        this.adjacentList[node] = [];
        this.numberOfNodes++;
    }

    addEdge(node1, node2)
    {
        this.adjacentList[node1].push(node2);
        this.adjacentList[node2].push(node1);
    }

    showConnections()
    {
        const allNodes = Object.keys(this.adjacentList);
        for(let node of allNodes)
        {
            let nodeConnection = this.adjacentList[node];
            let connection = "";
            let vertix;
            for(vertix of nodeConnection)
            {
                connection+= vertix + " ";
            }
            console.log(node + " --> " + connection);
        }
    }
}

// Driver code
var graph = new Graph();
graph.addVertix(1);
graph.addVertix(2);
graph.addVertix(3);
graph.addVertix(4);
graph.addEdge(1,2);
graph.addEdge(1,3);
graph.addEdge(2,3);
graph.addEdge(3,4);
graph.showConnections();