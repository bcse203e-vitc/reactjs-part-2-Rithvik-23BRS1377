import React from "react";

function ComparisonTable() {
  return (
    <table border="1" style={{ borderCollapse: "collapse", width: "100%" }}>
      <thead>
        <tr>
          <th>Feature</th>
          <th>ReactJS</th>
          <th>React Native</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Platform</td>
          <td>Web Applications</td>
          <td>Mobile Applications</td>
        </tr>
        <tr>
          <td>Rendering</td>
          <td>Uses Virtual DOM</td>
          <td>Uses Native Components</td>
        </tr>
        <tr>
          <td>Styling</td>
          <td>CSS</td>
          <td>React Native Stylesheets</td>
        </tr>
        <tr>
          <td>Navigation</td>
          <td>React Router</td>
          <td>React Navigation</td>
        </tr>
        <tr>
          <td>Installation</td>
          <td>`npm install react`</td>
          <td>`npx react-native init ProjectName`</td>
        </tr>
        <tr>
          <td>Usage</td>
          <td>Develops Single Page Applications (SPA)</td>
          <td>Develops iOS & Android Apps</td>
        </tr>
      </tbody>
    </table>
  );
}

export default ComparisonTable;
