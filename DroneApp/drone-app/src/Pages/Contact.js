import React, { Component } from 'react';
function Contact(){
    return(
       <>
    <div style={{ backgroundImage: "url(https://media.istockphoto.com/photos/dandelion-seed-background-picture-id1084153820?k=20&m=1084153820&s=612x612&w=0&h=PlXS7ZO30j3PyyAP3GWYvKdZo3bmXKY1sFcT8mkIabc=)" }}>
<div>  
<table border={1} align="center">
<tr rowSpan={10}>
<th > contact us</th>
</tr>
<tr>
        <td>
        <input type="text" name="name" value="name" />
        </td>
        </tr>
        <tr>
            <td>
            <input type="text" name="name" value="email" />
            </td>
        </tr>
        <tr>
            <td colSpan={1}><input type="text" name="name" value="country" /> </td>
            <td colSpan={5}><input type="text" name="name" value="number" /></td>
            </tr>
        <tr>
            <td>
            <input type="text" name="name" value="organisation" />
            </td>
        </tr>
        <tr>
        <input type="text" name="name" value="query" />
        </tr>
        <tr>
            <td>
            <input type="checkbox" />Agree to the terms
            </td>
        </tr>
        <tr>
        <td>
            <input type="submit" />
            </td>
        </tr>
            </table>
    </div>
    </div>
    </>
    )
}
export default Contact