import Link from "next/link";
import Image from 'next/image'
import { Card, Col, Row } from 'antd';
import { client } from "../../libs/client";
import shikoIcon from "../static/shikoIcon.png"
import Header from "../component/Header"
import Footer from "../component/Footer"

//SSG
export const getStaticProps = async () => {
  const data = await client.get({
    endpoint: "blogs",
    queries: { limit: 20 },
    fields: 'id,eyecatch'
  });
  return {
    props: {
      blog: data.contents,
    },
  };
};

export default function Home({ blog }) {
  return (
    <div>
      <Header />
      <main style={{ textAlign: "center", width: "100%", padding: "1rem" }} className={"site-card-wrapper"}>
        <Row gutter={16}>
          {blog.map((blog, index) => (
            <Col xs={20} sm={16} md={12} lg={8} xl={6} style={{ marginBottom: 12 }} key={index}>
              <Card key={blog.id} style={{ width: 320 }}
                hoverable>
                <Link href={`blog/${blog.id}`}>
                  <a href="">
                    <p>
                      {blog.title}
                    </p>
                    <div>
                      {blog?.eyecatch ? (
                        <Image
                          src={blog.eyecatch?.url ?? shikoIcon}
                          alt="blogIcon"
                          width={300}
                          height={300}
                        />
                      ) : (
                        <Image
                          src={shikoIcon}
                          alt="No Image"
                          width={300}
                          height={300} />
                      )}
                    </div>
                  </a>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </main>
      <Footer />
    </div>
  );
}