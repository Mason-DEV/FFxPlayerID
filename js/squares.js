/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function spot1(svgID, color) {
    var svgns = "http://www.w3.org/2000/svg";
    var group = document.createElementNS("http://www.w3.org/2000/svg", "g");
    group.setAttribute(svgID, "mygroup")

    var rect = document.createElementNS(svgns, 'rect');
    rect.setAttributeNS(null, 'x', '20');
    rect.setAttributeNS(null, 'y', '20');
    rect.setAttributeNS(null, 'rx', '10');
    rect.setAttributeNS(null, 'ry', '10');
    rect.setAttributeNS(null, 'height', '100');
    rect.setAttributeNS(null, 'width', '100');
    rect.setAttributeNS(null, 'fill', color);
    rect.setAttribute("class", "playerTag");
    rect.setAttribute("id", "1");

    group.appendChild(rect);

    var text = document.createElementNS(svgns, 'text');
    text.setAttributeNS(null, 'x', '70');
    text.setAttributeNS(null, 'y', '70');
    text.setAttributeNS(null, 'font-size', '50');
    text.setAttributeNS(null, 'alignment-baseline', 'central');
    text.setAttributeNS(null, 'text-anchor', 'middle');
    text.setAttribute("class", "playerTag");
    text.setAttribute("cursor", "default");

    text.textContent = '1';

    group.appendChild(text);
    document.querySelector('#' + svgID).appendChild(group);
}

function spot2(svgID, color) {
    var svgns = "http://www.w3.org/2000/svg";
    var group = document.createElementNS("http://www.w3.org/2000/svg", "g");
    group.setAttribute(svgID, "mygroup")

    var rect = document.createElementNS(svgns, 'rect');
    rect.setAttributeNS(null, 'x', '185');
    rect.setAttributeNS(null, 'y', '20');
    rect.setAttributeNS(null, 'rx', '10');
    rect.setAttributeNS(null, 'ry', '10');
    rect.setAttributeNS(null, 'height', '100');
    rect.setAttributeNS(null, 'width', '100');
    rect.setAttributeNS(null, 'fill', color);
    rect.setAttribute("class", "playerTag");
    rect.setAttribute("id", "2");
    group.appendChild(rect);

    var text = document.createElementNS(svgns, 'text');
    text.setAttributeNS(null, 'x', '235');
    text.setAttributeNS(null, 'y', '70');
    text.setAttributeNS(null, 'font-size', '50');
    text.setAttributeNS(null, 'alignment-baseline', 'central');
    text.setAttributeNS(null, 'text-anchor', 'middle');
    text.setAttribute("class", "playerTag");
    text.setAttribute("cursor", "default");

    text.textContent = '2';

    group.appendChild(text);
    document.querySelector('#' + svgID).appendChild(group);
}
function spot3(svgID, color) {
    var svgns = "http://www.w3.org/2000/svg";
    var group = document.createElementNS("http://www.w3.org/2000/svg", "g");
    group.setAttribute(svgID, "mygroup");

    var rect = document.createElementNS(svgns, 'rect');
    rect.setAttributeNS(null, 'x', '345');
    rect.setAttributeNS(null, 'y', '20');
    rect.setAttributeNS(null, 'rx', '10');
    rect.setAttributeNS(null, 'ry', '10');
    rect.setAttributeNS(null, 'height', '100');
    rect.setAttributeNS(null, 'width', '100');
    rect.setAttributeNS(null, 'fill', color);
    rect.setAttribute("class", "playerTag");
    rect.setAttribute("id", "3");
    group.appendChild(rect);

    var text = document.createElementNS(svgns, 'text');
    text.setAttributeNS(null, 'x', '395');
    text.setAttributeNS(null, 'y', '70');
    text.setAttributeNS(null, 'font-size', '50');
    text.setAttributeNS(null, 'alignment-baseline', 'central');
    text.setAttributeNS(null, 'text-anchor', 'middle');
    text.setAttribute("class", "playerTag");
    text.setAttribute("cursor", "default");

    text.textContent = '3';

    group.appendChild(text);
    document.querySelector('#' + svgID).appendChild(group);
}
function spot4(svgID, color) {
    var svgns = "http://www.w3.org/2000/svg";
    var group = document.createElementNS("http://www.w3.org/2000/svg", "g");
    group.setAttribute(svgID, "mygroup")

    var rect = document.createElementNS(svgns, 'rect');
    rect.setAttributeNS(null, 'x', '500');
    rect.setAttributeNS(null, 'rx', '10');
    rect.setAttributeNS(null, 'y', '20');
    rect.setAttributeNS(null, 'ry', '10');
    rect.setAttributeNS(null, 'height', '100');
    rect.setAttributeNS(null, 'width', '100');
    rect.setAttributeNS(null, 'fill', color);
    rect.setAttribute("class", "playerTag");
    rect.setAttribute("id", "4");
    group.appendChild(rect);

    var text = document.createElementNS(svgns, 'text');
    text.setAttributeNS(null, 'x', '550');
    text.setAttributeNS(null, 'y', '70');
    text.setAttributeNS(null, 'font-size', '50');
    text.setAttributeNS(null, 'alignment-baseline', 'central');
    text.setAttributeNS(null, 'text-anchor', 'middle');
    text.setAttribute("class", "playerTag");
    text.setAttribute("cursor", "default");

    text.textContent = '4';

    group.appendChild(text);
    document.querySelector('#' + svgID).appendChild(group);
}
function spot5(svgID, color) {
    var svgns = "http://www.w3.org/2000/svg";
    var group = document.createElementNS("http://www.w3.org/2000/svg", "g");
    group.setAttribute(svgID, "mygroup")

    var rect = document.createElementNS(svgns, 'rect');
    rect.setAttributeNS(null, 'x', '20');
    rect.setAttributeNS(null, 'rx', '10');
    rect.setAttributeNS(null, 'y', '175');
    rect.setAttributeNS(null, 'ry', '10');
    rect.setAttributeNS(null, 'height', '100');
    rect.setAttributeNS(null, 'width', '100');
    rect.setAttributeNS(null, 'fill', color);
    rect.setAttribute("class", "playerTag");
    rect.setAttribute("id", "5");
    group.appendChild(rect);

    var text = document.createElementNS(svgns, 'text');
    text.setAttributeNS(null, 'x', '70');
    text.setAttributeNS(null, 'y', '225');
    text.setAttributeNS(null, 'font-size', '50');
    text.setAttributeNS(null, 'alignment-baseline', 'central');
    text.setAttributeNS(null, 'text-anchor', 'middle');
    text.setAttribute("class", "playerTag");
    text.setAttribute("cursor", "default");

    text.textContent = '5';

    group.appendChild(text);
    document.querySelector('#' + svgID).appendChild(group);
}
function spot6(svgID, color) {
    var svgns = "http://www.w3.org/2000/svg";
    var group = document.createElementNS("http://www.w3.org/2000/svg", "g");
    group.setAttribute(svgID, "mygroup")

    var rect = document.createElementNS(svgns, 'rect');
    rect.setAttributeNS(null, 'x', '185');
    rect.setAttributeNS(null, 'rx', '10');
    rect.setAttributeNS(null, 'y', '175');
    rect.setAttributeNS(null, 'ry', '10');
    rect.setAttributeNS(null, 'height', '100');
    rect.setAttributeNS(null, 'width', '100');
    rect.setAttributeNS(null, 'fill', color);
    rect.setAttribute("class", "playerTag");
    rect.setAttribute("id", "6");
    group.appendChild(rect);

    var text = document.createElementNS(svgns, 'text');
    text.setAttributeNS(null, 'x', '235');
    text.setAttributeNS(null, 'y', '225');
    text.setAttributeNS(null, 'font-size', '50');
    text.setAttributeNS(null, 'alignment-baseline', 'central');
    text.setAttributeNS(null, 'text-anchor', 'middle');
    text.setAttribute("class", "playerTag");
    text.setAttribute("cursor", "default");

    text.textContent = '6';

    group.appendChild(text);
    document.querySelector('#' + svgID).appendChild(group);
}
function spot7(svgID, color) {
    var svgns = "http://www.w3.org/2000/svg";
    var group = document.createElementNS("http://www.w3.org/2000/svg", "g");
    group.setAttribute(svgID, "mygroup")

    var rect = document.createElementNS(svgns, 'rect');
    rect.setAttributeNS(null, 'x', '345');
    rect.setAttributeNS(null, 'rx', '10');
    rect.setAttributeNS(null, 'y', '175');
    rect.setAttributeNS(null, 'ry', '10');
    rect.setAttributeNS(null, 'height', '100');
    rect.setAttributeNS(null, 'width', '100');
    rect.setAttributeNS(null, 'fill', color);
    rect.setAttribute("class", "playerTag");
    rect.setAttribute("id", "7");
    group.appendChild(rect);

    var text = document.createElementNS(svgns, 'text');
    text.setAttributeNS(null, 'x', '390');
    text.setAttributeNS(null, 'y', '225');
    text.setAttributeNS(null, 'font-size', '50');
    text.setAttributeNS(null, 'alignment-baseline', 'central');
    text.setAttributeNS(null, 'text-anchor', 'middle');
    text.setAttribute("class", "playerTag");
    text.setAttribute("cursor", "default");

    text.textContent = '7';

    group.appendChild(text);
    document.querySelector('#' + svgID).appendChild(group);
}
function spot8(svgID, color) {
    var svgns = "http://www.w3.org/2000/svg";
    var group = document.createElementNS("http://www.w3.org/2000/svg", "g");
    group.setAttribute(svgID, "mygroup")

    var rect = document.createElementNS(svgns, 'rect');
    rect.setAttributeNS(null, 'x', '500');
    rect.setAttributeNS(null, 'rx', '10');
    rect.setAttributeNS(null, 'y', '175');
    rect.setAttributeNS(null, 'ry', '10');
    rect.setAttributeNS(null, 'height', '100');
    rect.setAttributeNS(null, 'width', '100');
    rect.setAttributeNS(null, 'fill', color);
    rect.setAttribute("class", "playerTag");
    rect.setAttribute("id", "8");

    group.appendChild(rect);

    var text = document.createElementNS(svgns, 'text');
    text.setAttributeNS(null, 'x', '550');
    text.setAttributeNS(null, 'y', '225');
    text.setAttributeNS(null, 'font-size', '50');
    text.setAttributeNS(null, 'alignment-baseline', 'central');
    text.setAttributeNS(null, 'text-anchor', 'middle');
    text.setAttribute("class", "playerTag");
    text.setAttribute("cursor", "default");
    text.textContent = '8';

    group.appendChild(text);
    document.querySelector('#' + svgID).appendChild(group);
}
function spot9(svgID, color) {
    var svgns = "http://www.w3.org/2000/svg";
    var group = document.createElementNS("http://www.w3.org/2000/svg", "g");
    group.setAttribute(svgID, "mygroup")

    var rect = document.createElementNS(svgns, 'rect');
    rect.setAttributeNS(null, 'x', '20');
    rect.setAttributeNS(null, 'rx', '10');
    rect.setAttributeNS(null, 'y', '330');
    rect.setAttributeNS(null, 'ry', '10');
    rect.setAttributeNS(null, 'height', '100');
    rect.setAttributeNS(null, 'width', '100');
    rect.setAttributeNS(null, 'fill', color);
    rect.setAttribute("class", "playerTag");
    rect.setAttribute("id", "9");
    group.appendChild(rect);

    var text = document.createElementNS(svgns, 'text');
    text.setAttributeNS(null, 'x', '70');
    text.setAttributeNS(null, 'y', '380');
    text.setAttributeNS(null, 'font-size', '50');
    text.setAttributeNS(null, 'alignment-baseline', 'central');
    text.setAttributeNS(null, 'text-anchor', 'middle');
    text.setAttribute("class", "playerTag");
    text.setAttribute("cursor", "default");

    text.textContent = '9';

    group.appendChild(text);
    document.querySelector('#' + svgID).appendChild(group);
}
function spot10(svgID, color) {
    var svgns = "http://www.w3.org/2000/svg";
    var group = document.createElementNS("http://www.w3.org/2000/svg", "g");
    group.setAttribute(svgID, "mygroup")

    var rect = document.createElementNS(svgns, 'rect');
    rect.setAttributeNS(null, 'x', '140');
    rect.setAttributeNS(null, 'rx', '10');
    rect.setAttributeNS(null, 'y', '330');
    rect.setAttributeNS(null, 'ry', '10');
    rect.setAttributeNS(null, 'height', '100');
    rect.setAttributeNS(null, 'width', '100');
    rect.setAttributeNS(null, 'fill', color);
    rect.setAttribute("class", "playerTag");
    rect.setAttribute("id", "10");
    group.appendChild(rect);

    var text = document.createElementNS(svgns, 'text');
    text.setAttributeNS(null, 'x', '190');
    text.setAttributeNS(null, 'y', '380');
    text.setAttributeNS(null, 'font-size', '50');
    text.setAttributeNS(null, 'alignment-baseline', 'central');
    text.setAttributeNS(null, 'text-anchor', 'middle');
    text.setAttribute("class", "playerTag");
    text.setAttribute("cursor", "default");

    text.textContent = '10';

    group.appendChild(text);
    document.querySelector('#' + svgID).appendChild(group);
}
function spot11(svgID, color) {
    var svgns = "http://www.w3.org/2000/svg";
    var group = document.createElementNS("http://www.w3.org/2000/svg", "g");
    group.setAttribute(svgID, "mygroup")

    var rect = document.createElementNS(svgns, 'rect');
    rect.setAttributeNS(null, 'x', '260');
    rect.setAttributeNS(null, 'rx', '10');
    rect.setAttributeNS(null, 'y', '330');
    rect.setAttributeNS(null, 'ry', '10');
    rect.setAttributeNS(null, 'height', '100');
    rect.setAttributeNS(null, 'width', '100');
    rect.setAttributeNS(null, 'fill', color);
    rect.setAttribute("class", "playerTag");
    rect.setAttribute("id", "11");
    group.appendChild(rect);

    var text = document.createElementNS(svgns, 'text');
    text.setAttributeNS(null, 'x', '310');
    text.setAttributeNS(null, 'y', '380');
    text.setAttributeNS(null, 'font-size', '50');
    text.setAttributeNS(null, 'alignment-baseline', 'central');
    text.setAttributeNS(null, 'text-anchor', 'middle');
    text.setAttribute("class", "playerTag");
    text.setAttribute("cursor", "default");

    text.textContent = '11';

    group.appendChild(text);
    document.querySelector('#' + svgID).appendChild(group);
}
function spot12(svgID, color) {
    var svgns = "http://www.w3.org/2000/svg";
    var group = document.createElementNS("http://www.w3.org/2000/svg", "g");
    group.setAttribute(svgID, "mygroup")

    var rect = document.createElementNS(svgns, 'rect');
    rect.setAttributeNS(null, 'x', '380');
    rect.setAttributeNS(null, 'rx', '10');
    rect.setAttributeNS(null, 'y', '330');
    rect.setAttributeNS(null, 'ry', '10');
    rect.setAttributeNS(null, 'height', '100');
    rect.setAttributeNS(null, 'width', '100');
    rect.setAttributeNS(null, 'fill', color);
    rect.setAttribute("class", "playerTag");
    rect.setAttribute("id", "12");
    group.appendChild(rect);

    var text = document.createElementNS(svgns, 'text');
    text.setAttributeNS(null, 'x', '430');
    text.setAttributeNS(null, 'y', '380');
    text.setAttributeNS(null, 'font-size', '50');
    text.setAttributeNS(null, 'alignment-baseline', 'central');
    text.setAttributeNS(null, 'text-anchor', 'middle');
    text.setAttribute("class", "playerTag");
    text.setAttribute("cursor", "default");

    text.textContent = '12';

    group.appendChild(text);
    document.querySelector('#' + svgID).appendChild(group);
}

function spot13(svgID, color) {
  var svgns = "http://www.w3.org/2000/svg";
    var group = document.createElementNS("http://www.w3.org/2000/svg", "g");
    group.setAttribute(svgID, "mygroup")

    var rect = document.createElementNS(svgns, 'rect');
    rect.setAttributeNS(null, 'x', '500');
    rect.setAttributeNS(null, 'rx', '10');
    rect.setAttributeNS(null, 'y', '330');
    rect.setAttributeNS(null, 'ry', '10');
    rect.setAttributeNS(null, 'height', '100');
    rect.setAttributeNS(null, 'width', '100');
    rect.setAttributeNS(null, 'fill', color);
    rect.setAttribute("class", "playerTag");
    rect.setAttribute("id", "13");
    group.appendChild(rect);

    var text = document.createElementNS(svgns, 'text');
    text.setAttributeNS(null, 'x', '545');
    text.setAttributeNS(null, 'y', '380');
    text.setAttributeNS(null, 'font-size', '50');
    text.setAttributeNS(null, 'alignment-baseline', 'central');
    text.setAttributeNS(null, 'text-anchor', 'middle');
    text.setAttribute("class", "playerTag");
    text.setAttribute("cursor", "default");

    text.textContent = '13';

    group.appendChild(text);
    document.querySelector('#' + svgID).appendChild(group);
}