import React from 'react';
import { Document, Page, Text, View, StyleSheet,PDFViewer,Image} from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#f0f0f0',
  },
  section: {
    margin: 20,
    padding: 10,
    
    
  },
  
  
  pageContainer:{
margin:40
  },
  blueLineBackground:{
 width:'100%',
 backgroundColor:'#003153',
 marginBottom:20,
 height:50,
color:"white"

  },
  header:{
  width:'100%',
  },  
  heading: {
    fontSize: 18,
    marginBottom: 5,
    fontWeight: 'bold',
    backgroundColor:'red'
  },
  subHeading: {
    fontSize: 14,
    marginBottom: 5,
    textDecoration: 'underline',
  },
  content: {
    fontSize: 30,
    right:300,
    top:400,
    color:"white",
    width:400,
     
  },
  Role: {
    fontSize: 30,
    right:300,
    top:410,
    color:"white",
    width:400,
     
  },
  backgroundImageSection1: {
     
    width:100,
    height:50,
    top:50,
    left:50,
    
     


    zIndex: -1,
  },
  backgroundImageSection5: {
     
    width:100,
    height:50,
    top:100,
    left:400,
    
     


    zIndex: -1,
  },
  backgroundImageSection2: {
     
    width:600,
    height:600,
    top:50,


    zIndex: -1,
  },
  backgroundImageSection3: {

    width:200,
    height:40,
    left:90,
    top:750
    
  },
  column1: {
    width: '25%',
    fontSize:16
   
  },
  column: {
    width: '75%',
    fontSize:16
    
     
  },

  blueBackground: {
    backgroundColor: '#00bfff',
    padding: 5,
    height:50,
    border:"white",
    color:"white",
    fontSize:16
  },
  roles_contributions:{
    backgroundColor: '#00bfff',
    padding: 5,
    height:70,
    border:"white",
    color:"white",
    fontSize:11

  },
  blueBackgroundNoBorder:{
    backgroundColor: '#003153',
    height:50,
    border:0,
    width:'515',
    paddingTop:15,
    paddingLeft:5,
    color:"white",
    fontSize:16
  },
  projectDesription:{
    height:300,
    backgroundColor: '#00bfff',
    padding: 5,
    fontSize:16,
    border:"white",
    color:"white"

  },
  blueBackgroundNoBorder2:{
    backgroundColor: '#00bfff',
    height:50,
    border:0,
    
  },
 expirienc_two_column: {
  height:50,
  borderLeft:1,
  borderRight:1,
  borderBottom:0,
  borderTop:1,
  color:"white",
  width:441
  },
  expirienc_two_column_roles_contibutions: {
    height:70,
    borderLeft:1,
    borderRight:1,
    borderBottom:0,
    borderTop:1,
    color:"white",
    width:441
    },
  expirienc_two_column_project_Description: {
    height:300,
    borderLeft:1,
    borderRight:1,
    borderBottom:0,
    borderTop:1,
    color:"black",
    width:441,
    fontSize:16
    },
  borderRight: {
    height:50,
    borderLeft:1,
    borderRight:1,
    borderBottom:0,
    borderTop:1,
    color:"white"
  },
  borderRight2: {
    height:50,
    border:0,
    color:"white"
  },
  cellText: {
    color: 'white',
    width:'100%',
    backgroundColor:'blue'
  },
  container: {
    flexDirection: 'row', // Set flexDirection to 'row' for horizontal arrangement
    marginBottom: 10,
  },
  profileSummary:{
     
    marginBottom: 10,
    fontSize:11
   
  },
Certification:{
paddingTop:10
}
});

const Preview = ({ data }) => {
  return (
    <div>
      <PDFViewer width="500" height="600" >
        <Document>
          <Page size="A4" style={styles.page} wrap>
          <View  >
          <Image
             
             src="http://localhost:3000/20years.png"
              style={styles.backgroundImageSection5}
          /> 
            
            <Image
             
             src="http://localhost:3000/LTI.png"
              style={styles.backgroundImageSection1}
          /> 
            
            <Image
             
             src="http://localhost:3000/first-page-section-2.png"
              style={styles.backgroundImageSection2}
          /> 
            </View>
            <View  >
            <Image
             
             src="http://localhost:3000/larsen-toubro.png"
              style={styles.backgroundImageSection3}
          /> 
            </View>
            <View >
                  
                  <Text style={styles.content}>{"Sagar Patra"}</Text>
                 
                 
                  
                  <Text style={styles.Role}>{"Product Engineer"}</Text>
                </View>
            
          </Page>

          <Page size="A4" style={styles.page}>
            
            <View style={styles.pageContainer}>
              <View style={styles.page_header}></View>
              <View >
            <View style={styles.blueLineBackground}>
              
           
            </View>
              <View style={styles.profileSummary}>
              <Text >{`• Having 3+ years of experience in developing full Stack Application using Spring Boot,
JPA, Hibernate, JDBC, PostgreSQL and client-side technologies such as React, Redux,
Bootstrap
• Experience in using CICD tools GIT, Jenkins pipeline
• Hands on experience in Spring Cloud and Microservices
• Experience in testing frameworks such as Junit and Mockito
• Strong knowledge of basic web technologies such as HTML, CSS, Bootstrap.
• In-depth knowledge of JavaScript, React JS
• Knowledge of database platforms such as PostgreSQL, Firebase, SQLite, and others
• Knowledge of software development, basic testing, and agile development
methodology`}</Text>
               

              </View>
              
              
              
            </View>
     <View style={styles.container}>
      <View style={styles.column1}>
         
        <Text style={styles.blueBackgroundNoBorder}>Skills Summary</Text>
        <Text style={styles.blueBackground}>Row 2</Text>
        <Text style={styles.blueBackground}> Row 3</Text>
        <Text style={styles.blueBackground}>Row 4</Text>
        <Text style={styles.blueBackground}>Row 5</Text>
        <Text style={styles.blueBackground}>Row 6</Text>
      </View>
      <View style={styles.column}>
         
      <Text  style={styles.borderRight2}></Text>
        <Text style={styles.borderRight}>Row 2</Text>
        <Text style={styles.borderRight}>Row </Text>
        <Text style={styles.borderRight}>Row 4</Text>
        <Text style={styles.borderRight}>Row 5</Text>
        <Text style={styles.borderRight}>Row 6</Text>
      </View>
      </View>
      <View style={styles.blueLineBackground}>
             <Text style={styles.Certification}>Certifications</Text> 
            </View>
      </View>
    </Page>
          <Page size="A4" style={styles.page}>
    <View style={[styles.container,styles.pageContainer]}>
      <View style={styles.column1}>
         
        <Text style={styles.blueBackgroundNoBorder}>Skills Summary</Text>
        <Text style={styles.blueBackgroundNoBorder}>Skills Summary</Text>
        <Text style={styles.blueBackground}>Project Name </Text>
        <Text style={styles.blueBackground}>Start Date  </Text>
        <Text style={styles.projectDesription}>Project Description </Text>
        <Text style={styles.roles_contributions}>Role &Contribution </Text>
        <Text style={styles.blueBackground}>Technology &Tools </Text>
      </View>
      <View style={styles.column}>
         
      <Text  style={styles.borderRight2}></Text>
      <Text  style={styles.borderRight2}></Text>
        <Text style={styles.borderRight}>Row 2</Text>
        <Text style={styles.borderRight}>Row </Text>
        <Text style={styles.expirienc_two_column_project_Description}>The project work focused more towards developing a metadata application portal
that links existing on premise metadata resource information with native GCP
metadata tools into one secure web-based application with enhanced search and
visualization capabilities and without replicating or duplicating the information that
already exists in other metadata tools. With these attributes data users can create
use case requests which will be sent to google big query and creation of auth views
with requested data and views. After these entitlements are created in Google Big
Query, users are given access to these through Service Now Portal integration layer
in the form of API requests after proper approval from data approvers
</Text>
        <Text style={styles.expirienc_two_column_roles_contibutions}>Row 5</Text>
        <Text style={styles.expirienc_two_column}>Row 6</Text>
      </View>
      <View style={styles.column}>
         
      <Text  style={styles.borderRight2}></Text>
      <Text  style={styles.borderRight2}></Text>
         
        <Text style={styles.borderRight}>Row 5</Text>
        <Text style={styles.borderRight}>Row 6</Text>
        <Text  style={styles.borderRight2}></Text>
      <Text  style={styles.borderRight2}></Text>
      
      </View>
      </View>  
      
          </Page>
        </Document>
      </PDFViewer>
    </div>
  );
};

export default Preview;
