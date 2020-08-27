# madcamp-week2-server
- 카이스트 캠프 2주차, 영화 리뷰 다이어리, 서버 코드(영화 이미지 및 리뷰 관련 부분 코드를 작성함.)
- 영화 리뷰 다이어리 앱에서, 영화 이미지를 첨부해 리뷰를 써서 DB에 업로드하고, 원하면 리뷰를 삭제 함. 
- 친구들의 영화 리뷰가 보여지는 Feed에, 나와 친구 관계인 사람들의 리뷰 정보를 가져와서 뿌려줌.
- Feed에서 친구 리뷰에 좋아요를 누르면 DB에 정보를 update 함.


## 파일 설명(직접 작성한 코드들만)
- server/routes/imageUpload.js
    - multer를 이용해 서버의 uploads 폴더 안에 전송된 이미지를 저장하고, 해쉬값으로 이름을 지정함. 
    - 그리고 Images DB에는 영화 제목, 리뷰 내용과, 평점, 작성한 사람의 이메일, 서버내 이미지 경로값을 업로드함.

- server/routes/imageDelete.js
    - 서버내 이미지 경로 값(해쉬 값)을 parmeter로 Get 요청을 받음.
    - Images DB에서 이미지 경로 값으로 데이터를 찾아서 해당 데이터 삭제함.

- server/routes/imageUpdate.js
    - 내 Feed에서 친구 리뷰에 좋아요를 누르면, 리뷰에 해당하는 데이터를 Images DB에서 찾아서 likes를 1 증가시킴.
    
- server/routes/imageList.js
    - Images DB에 있는 모든 정보를 가져옴. 
    
- server/routes/imageLoad.js
    - 서버내 이미지 경로 값(해쉬 값)을 parmeter로 Get 요청을 보냈을때, 이미지 파일을 응답으로 전송해줌.

**DB 연동 관련 파일**
- server/models/imageUpload.js
    - 영화 이미지 + 리뷰 관련 데이터 mongo db 연동.

