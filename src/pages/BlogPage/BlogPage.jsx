import { useEffect, useState } from "react";
import "./BlogPage.css";
import PageLayout from "../../shared/PageLayout/PageLayout";
import {
  marksHero,
  natureHero,
} from "../../helpers/BlogServices/BlogHeroImages";
import { useNavigate, useParams } from "react-router-dom";
import * as blogServices from "./../../helpers/BlogServices/BlogService";
import BlogCard from "../../components/BlogCard/BlogCard";
import Button from "../../shared/Button/Button";
import { mainURL } from "../../helpers/BlogServices/BlogUrl";

function BlogPage() {
  const { section } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState("الطبيعة");
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    switch (section) {
      case "marks":
        setCategory("الاثرية");
        break;
      case "nature":
        setCategory("الطبيعة");
        break;
    }
    setCurrentPage(1);
    setLoading(false);
  }, [section]);

  const { blogs, totalPages, isLoadingBlogs } = blogServices.useFetchBlogs(
    currentPage,
    category
  );
  const isLoading = isLoadingBlogs || loading;


  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <div className="position-relative blog-bage-Ay">
      <PageLayout img={section === "marks" ? marksHero : natureHero}>
        {isLoading ? (
          <div className="d-flex justify-content-center">
            <div
              className="spinner-border"
              style={{ color: "rgb(126, 126, 126)" }}
              role="status"
            >
              <span className="sr-only"></span>
            </div>
          </div>
        ) : (
          blogs.map((blog, index) => (
            <BlogCard
              key={index}
              title={blog.title}
              location={blog.city}
              brief={blog.content}
              image={mainURL + blog.main_image}
              button={
                <Button
                  btnText="اقرأ المزيد"
                  radius="10px"
                  className="BY_CardsButtons"
                  onClick={() => navigate(`/blog-details/${blog.id}`)}
                />
              }
            />
          ))
        )}
        <div className="buttons-slider desktop d-flex justify-content-center gap-3 position-absolute ">
          {Array.from({ length: totalPages }, (_, index) => (
            <div
              key={index}
              className={`${currentPage == index + 1 ? "active" : ""}`}
              onClick={() => handlePageChange(index + 1)}
            />
          ))}
        </div>
      </PageLayout>
    </div>
  );
}

export default BlogPage;
