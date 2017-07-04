// var data = [4,12,8,16,10];
// code for HTML bar chart
// var x = d3.scaleLinear()
//     .domain([0, d3.max(data)])
//     .range([0, 600]);

// d3.select('#chart')
//   .selectAll('div')
//     .data(data)
//   .enter().append('div')
//     .style('width', function(d) {return x(d) + 'px';})
//     .text(function(d) {return d;});
  
// code for static SVG bar chart
// var totalWidth = 420,
//     barHeight = 20;
// var calcWidth = d3.scaleLinear()
//                .domain([0, d3.max(data)])
//                .range([0, totalWidth]);
// var svg = d3.select('.chart')
//             .attr('width', totalWidth)
//             .attr('height', barHeight*data.length);
// var bars = svg.selectAll('g')
//                 .data(data)
//               .enter().append('g')
//                 .attr('transform',
//                       function(d, i) { return 'translate(0,' + i*20 + ')'; });
// bars.append('rect')
//     .attr('height', 19)
//     .attr('width', calcWidth);
// bars.append('text')
//     .style('dy', '.35em')
//     .attr('y', 12.5)
//     .attr('x', function(d) {return calcWidth(d) - 3;})
//     .text(function(d) {return d;});

// code for static SVG bar chart w/ data load
// var totalWidth = 420,
//     barWidth = 20;
// var x = d3.scaleLinear()
//           .range([0, totalWidth]);
// var svg = d3.select('.chart')
//             .attr('width', totalWidth);
// d3.tsv('data.tsv', type, function(err, data) {
//     console.log(data);
//     x.domain([0, d3.max(data, function(d) { return d.value; })]);
//     svg.attr('height', barWidth*data.length);
//     var bars = svg.selectAll('g')
//                     .data(data)
//                   .enter().append('g')
//                     .attr('transform',
//                           function(d, i) {
//                             return 'translate(0,'
//                                     + i*20 +')';
//                           });
//     bars.append('rect')
//         .attr('height', barWidth - 1)
//         .attr('width', function(d, i) { return x(d.value); });
//     bars.append('text')
//         .style('dy', '.35em')
//         .attr('y', 12.5)
//         .attr('x', function(d) { return x(d.value) - 2; })
//         .text(function(d) { return d.value; });
// });

// function type(d) {
//     d.value = +d.value;
//     return d;
// }

// code for rotated static SVG bar chart w/ data load
var totalWidth = 420,
    barWidth = 20;
var x = d3.scaleLinear()
          .range([0, totalWidth]);
var svg = d3.select('.chart')
            .attr('width', totalWidth);
d3.tsv('data.tsv', type, function(err, data) {
    console.log(data);
    x.domain([0, d3.max(data, function(d) { return d.value; })]);
    svg.attr('height', barWidth*data.length);
    var bars = svg.selectAll('g')
                    .data(data)
                  .enter().append('g')
                    .attr('transform',
                          function(d, i) {
                            return 'translate(0,'
                                    + i*20 +')';
                          });
    bars.append('rect')
        .attr('height', barWidth - 1)
        .attr('width', function(d, i) { return x(d.value); });
    bars.append('text')
        .style('dy', '.35em')
        .attr('y', 12.5)
        .attr('x', function(d) { return x(d.value) - 2; })
        .text(function(d) { return d.value; });
});

function type(d) {
    d.value = +d.value;
    return d;
}
