// 모달창에서 회원 탈퇴 기능

import React from "react";
import {
  ModalFlexBox,
  Logo,
  Subject,
  ModalBtnBlock,
  ModalBtn,
} from "./DeleteModal.styled";

function DeleteUserModal({ closeModal }) {
  const onRemove = () => {
    closeModal();
  };
  return (
    <>
      <ModalFlexBox>
        <Logo src="logo2.png" alt="" />
        <Subject>정말로 탈퇴하시겠습니까?</Subject>
      </ModalFlexBox>

      <ModalBtnBlock>
        <ModalBtn onClick={closeModal} color="#2E9AFE" font="#ffff">
          아니요
        </ModalBtn>
        <ModalBtn onClick={() => onRemove()}>네 탈퇴할래요</ModalBtn>
      </ModalBtnBlock>
    </>
  );
}

export default DeleteUserModal;
