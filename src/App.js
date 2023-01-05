import React from "react";
import 'swiper/css';
import { Footer, Header } from "./app/components";
import ChatWithAdmin from "./app/components/ChatWithAdmin/ChatWithAdmin";
import {
  Banner,
  Categories,
  Product,
  RecommendedCategory,
  LikeCategories,
  RegionalRecipes,
  Together,
  Brand,
  UpcomingCategory,
  BottomNavigation,
} from "./app/sections";

const App = () => {
  return (
    <>
      <Header />
      <Banner />
      <Categories />
      <RecommendedCategory />
      <Product />
      <LikeCategories />
      <RegionalRecipes />
      <Together />
      <Product recommended={true} bestSelling={true} />
      <Brand />
      <UpcomingCategory />
      <Footer />
      {/* Chat App */}
      <BottomNavigation />
     <ChatWithAdmin />
    </>
  );
};

export default App;
