import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const APIs = [
  {
    fullname: "Mohamed Nabil Messaoudi",
    profesion: "Web developer",
    bio: "kkklnklnajajklajalkhahbkljhabjk",
  },
  {
    fullname: "Mohamed berkaoui",
    profesion: "ili i9olo 3arfou ya3mlou",
    bio: "kkklnklnajajklajalkhahbkljhabjk",
  },
  {
    fullname: "ala Garbaa",
    profesion: "engagé",
    bio: "kkklnklnajajklajalkhahbkljhabjk",
  },
];

function Profile() {
  return (
    <>
      <Container>
        <Row>
          {APIs.map(({ fullname, profesion, bio }) => (
            <Col>
              <Profile fullname={fullname} profesion={profesion} bio={bio} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
export default Profile;
