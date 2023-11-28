export default function PostDetail() {
  return (
    <>
      {" "}
      <div className="post__navigation">
        <div className="post__navigation--active">전체</div>
        <div>나의 글 </div>
      </div>
      <div className="post__detail">
        <div className="post__box">
          <div className="post__title">sdklfjsdklfj</div>

          <div className="post__profile-box">
            <div className="post__profile"></div>
            <div className="post__author-name">패스트캠퍼스</div>
            <div className="post__date">2023</div>
          </div>
          <div className="post__utils-box">
            <div className="post__delete">삭제</div>
            <div className="post__edit">수정</div>
          </div>
          <div className="post__text">mlkjl</div>
        </div>
      </div>
    </>
  );
}
