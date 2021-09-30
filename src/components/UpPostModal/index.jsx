import React, { useContext, useRef, useEffect, useState } from "react";
import { ThemeContext } from "../../contexts/ThemeContextProvider";

import { Link } from "react-router-dom";

import { v4 as uuidv4 } from "uuid";

import "./UpPostModal.scss";
import { PostsContext } from "../../contexts/PostsContextProvider";

const UpPostModal = (props) => {
  const { setUpPostModalIsOpen } = props;

  const { theme } = useContext(ThemeContext);
  const { isLightTheme, lightTheme, darkTheme } = theme;
  const style = isLightTheme ? lightTheme : darkTheme;

  const { handleAddPost } = useContext(PostsContext);

  const user = {
    id: 1,
    img: "./img/petsla.png",
    name: "Leo Asher",
    link: "/LeoAsher25",
  };

  const typeList = [
    {
      id: 1,
      imgLink: "https://static.xx.fbcdn.net/rsrc.php/v3/yQ/r/cFhDhqxQYGs.png",
      imgBgPosition: "0px -225px",
      title: "Photo/Video",
    },
    {
      id: 2,
      imgLink: "https://static.xx.fbcdn.net/rsrc.php/v3/yQ/r/cFhDhqxQYGs.png",
      imgBgPosition: "0px -100px",
      title: "Photo/Video",
    },
    {
      id: 3,
      imgLink: "https://static.xx.fbcdn.net/rsrc.php/v3/yQ/r/cFhDhqxQYGs.png",
      imgBgPosition: "0px -25px",
      title: "Photo/Video",
    },
    {
      id: 4,
      imgLink: "https://static.xx.fbcdn.net/rsrc.php/v3/yE/r/HyeXO0sd7uk.png",
      imgBgPosition: "0px -225px",
      title: "Photo/Video",
    },
    {
      id: 5,
      imgLink: "https://static.xx.fbcdn.net/rsrc.php/v3/yQ/r/cFhDhqxQYGs.png",
      imgBgPosition: "0px -175px",
      title: "Photo/Video",
    },
  ];

  //useState
  const [profileImg, setProfileImg] = useState("");
  const [previewIsOpen, setPreviewIsOpen] = useState(false);

  //declear useRef
  const textContentRef = useRef(null);
  const textInputRef = useRef(null);

  const postBtnRef = useRef(null);
  const themeCheckboxRef = useRef(null);
  const uploadImgWrapRef = useRef(null);

  const typeListRef = useRef([]);

  // handle when input text
  const textInputOnInput = () => {
    if (textInputRef.current.textContent.trim() !== "") {
      postBtnRef.current.classList.add("active");
    } else {
      postBtnRef.current.classList.remove("active");
    }

    if (previewIsOpen) {
      uploadImgWrapRef.current.style.display = "block";
      textContentRef.current.style.minHeight = "3rem";
      textInputRef.current.classList.add("active");
    } else {
      if (textInputRef.current.offsetHeight <= 40) {
        textInputRef.current.classList.remove("active");
      }
      if (textInputRef.current.offsetHeight > 56) {
        textInputRef.current.classList.add("active");
      }
    }
  };

  // handle when upload image
  const handleUploadImg = (e) => {
    // const reader = new FileReader();
    // reader.readAsDataURL(e.target.files[0]);
    // reader.onload = () => {
    //   if (reader.readyState == 2) {
    //     setProfileImg(reader.result);
    //   }
    // };
    setProfileImg(URL.createObjectURL(e.target.files[0]));
    postBtnRef.current.classList.add("active");
  };

  console.log(profileImg);

  // handle when close preview
  const handlePreviewCloseOnClick = () => {
    setProfileImg("");
    setPreviewIsOpen(false);

    textInputRef.current.classList.remove("active");
    uploadImgWrapRef.current.style.display = "none";
    textContentRef.current.style.minHeight = "14rem";
  };

  const handlePostSubmit = () => {
    if (textInputRef.current.textContent.trim() === "" && profileImg === "")
      return;
    const postTextContent = textInputRef.current.innerHTML;

    const post = {
      postID: uuidv4(),
      author: {
        ava: "./img/petsla.png",
        name: "Leo Asher",
      },
      publishedTime: Date.now(),
      content: {
        text: postTextContent,
        media: profileImg,
      },
      user: {
        ava: "./img/petsla.png",
        username: "Leo Asher",
      },
      isReacted: false,
      reactions: {
        like: 0,
      },
      comments: [],
    };

    handleAddPost(post);
    setUpPostModalIsOpen(false);
  };

  // handle check input checkbox themeCheckbox
  useEffect(() => {
    themeCheckboxRef.current.checked = !isLightTheme;
  }, [isLightTheme]);

  // hanlde when
  useEffect(() => {
    if (profileImg.trim() !== "") {
      uploadImgWrapRef.current.classList.add("active");
    } else {
      uploadImgWrapRef.current.classList.remove("active");
    }
  }, [profileImg]);

  useEffect(() => {
    typeListRef.current[0].onclick = () => {
      setPreviewIsOpen(true);
      textInputRef.current.classList.add("active");
      uploadImgWrapRef.current.style.display = "block";
      textContentRef.current.style.minHeight = "3rem";
    };
  }, []);

  return (
    <div
      className="up-post-modal"
      style={{
        backgroundColor: style.topnavBgColor,
        borderColor: style.borderColor,
        color: style.color,
      }}
    >
      <div className="up-post-modal__wrap">
        <div
          className="modal__header"
          style={{ borderColor: style.borderColor }}
        >
          <div className="modal-title">
            <span>Create Post</span>
          </div>

          <div
            className="modal-close"
            onClick={() => setUpPostModalIsOpen(false)}
            style={{ backgroundColor: style.bgColorGray }}
          >
            <i className="bi bi-x-lg"></i>
          </div>
        </div>

        <div className="modal__body">
          <div className="modal-user">
            <Link to={user.link} className="user-link">
              <div
                className="bg"
                style={{ backgroundColor: style.bgColorGray }}
              ></div>
              <div className="user-content" style={{ color: style.color }}>
                <div className="user-img">
                  <img src={user.img} alt="" />
                </div>
              </div>
            </Link>

            <div className="user-desc">
              <div className="user-name">
                <span>{user.name}</span>
              </div>
            </div>
          </div>
          {/* end of modal-user */}
          <div className="modal-content">
            <label
              ref={textContentRef}
              onClick={() => {
                textInputRef.current.focus();
              }}
              className="text-content"
            >
              <p
                ref={textInputRef}
                className="text-input"
                contentEditable="true"
                data-text="What's on your mind, bro?"
                onInput={() => textInputOnInput()}
              ></p>
            </label>

            <div className="emotion-content">
              <i className="bi bi-emoji-smile"></i>
            </div>
          </div>
          {/* end of modal-content  */}

          <div
            ref={uploadImgWrapRef}
            className="upload-img-wrap"
            style={{ borderColor: style.borderColor }}
            onDragEnter={(e) => {
              e.stopPropagation();
              e.preventDefault();
            }}
            onDragOver={(e) => {
              e.stopPropagation();
              e.preventDefault();
            }}
            onDrop={(e) => {
              e.stopPropagation();
              e.preventDefault();

              const dt = e.dataTransfer;
              const files = dt.files;

              setProfileImg(URL.createObjectURL(files[0]));
            }}
          >
            <div
              className="preview-close"
              onClick={() => handlePreviewCloseOnClick()}
              style={{
                backgroundColor: style.topnavBgColor,
                borderColor: style.borderColor,
              }}
            >
              <i className="bi bi-x-lg"></i>
            </div>

            <input
              ref={themeCheckboxRef}
              type="checkbox"
              name="themeCheckbox"
              id="theme-checkbox"
              hidden
            />

            <div
              className="upload-preview"
              style={{ backgroundColor: style.upPostInputBox }}
            >
              <input
                type="file"
                multiple
                // accept="image/*"
                name="image-upload"
                id="input"
                onChange={(e) => handleUploadImg(e)}
                hidden
              />
              <label htmlFor="input" className="preview-icon">
                <div className="bg"></div>
                <i></i>
              </label>

              <div className="preview-title">
                <span>Add Photos/Videos</span>
              </div>
            </div>
            <div className="preview-img">
              <img src={profileImg} alt="" />
            </div>
          </div>
          {/**end of upload-img--wrap */}

          <div
            className="type-of-upping"
            style={{ borderColor: style.borderColor }}
          >
            <div className="title">
              <span>Add to Your Post</span>
            </div>
            <div className="type-list">
              {typeList.map((item, index) => (
                <div
                  key={item.id}
                  ref={(itemRef) => (typeListRef.current[index] = itemRef)}
                  className="type-item"
                >
                  <div
                    className="bg"
                    style={{ backgroundColor: style.upPostInputBox }}
                  ></div>

                  <div className="type-item__wrap">
                    <div
                      className="type-item-img"
                      style={{
                        backgroundImage: `url('${item.imgLink}')`,
                        backgroundPosition: item.imgBgPosition,
                      }}
                    ></div>
                  </div>
                  <div className="type-item-title">{item.title}</div>
                </div>
              ))}

              <div className="type-item">
                <div
                  className="bg"
                  style={{ backgroundColor: style.upPostInputBox }}
                ></div>
                <div className="type-item__wrap">
                  <div className="type-item-img">
                    <i className="fas fa-ellipsis-h"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="btn post-btn"
            ref={postBtnRef}
            onClick={() => handlePostSubmit()}
          >
            Post
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpPostModal;
