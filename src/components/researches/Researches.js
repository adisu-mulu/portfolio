import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ResearchAndPublications() {
   const researches = [
      {
        researchName: "Prediction and classification of IoT sensor faults using hybrid deep learning model",
        description: "The research develops a proactive approach to sensor fault prediction using a hybrid deep learning model, aiming to enhance the reliability and efficiency of IoT systems, allowing for preventive measures to be taken before faults have a detrimental impact.",
        Publisher: "Springer Nature",
        DOI: "https://doi.org/10.1007/s42452-024-05633-7",
        url: "https://link.springer.com/article/10.1007/s42452-024-05633-7"
      
      },
      // {
      //   researchName: "Project 1",
      //   description: "A brief description of Project 1.",
      //   url: "somewhere"
      // },
      // {
      //   researchName: "Project 1",
      //   description: "A brief description of Project 1.",
      //   url: "somewhere"
      // },
   
      // Add more projects as needed
    ];
  return (
 
    <div className="d-flex flex-wrap justify-content-start">
      {researches.map((research, index) => (
        <Card className="m-2" key={index} style={{ width: '100%' ,padding: '1px'}}>
          <Card.Body>
            <Card.Title>{research.researchName}</Card.Title>
            <Card.Text>
              {research.description}
            </Card.Text>
            <Card.Text>
              <h6>Publisher: {research.Publisher}</h6>
            </Card.Text>
            <Card.Text>
              <h6>DOI: {research.DOI}</h6>
            </Card.Text>
            <Button variant="primary" href={research.url} target="_blank">
              Link
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default ResearchAndPublications;