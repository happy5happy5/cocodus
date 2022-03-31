import create from "zustand";

// 댓글 삭제 버튼 클릭했을때,
export const commentModalStore = create((set) => ({
  modalOpen: false,
  openModal: () =>
    set((state) => ({
      modalOpen: true,
    })),
  closeModal: () =>
    set((state) => ({
      modalOpen: false,
    })),
}));

// 링크 클릭했을때,
export const linkModalStore = create((set) => ({
  linkModal: false,
  openModal: () =>
    set((state) => ({
      linkModal: true,
    })),
  closeModal: () =>
    set((state) => ({
      linkModal: false,
    })),
}));

// 회원탈퇴 버튼 클릭했을 때,
export const withdrawalModalStore = create((set) => ({
  modalOpen2: false,
  openModal2: () =>
    set((state) => ({
      modalOpen2: true,
    })),
  closeModal2: () =>
    set((state) => ({
      modalOpen2: false,
    })),
}));

// 유저정보등록페이지에서 유저 정보 등록 버튼 클릭했을 때,
export const userInfoRegisterModalStore = create((set) => ({
  modalOpen2: false,
  openModal2: () =>
    set((state) => ({
      modalOpen2: true,
    })),
  closeModal2: () =>
    set((state) => ({
      modalOpen2: false,
    })),
}));

// 유저 정보 수정 버튼 클릭했을 때,
export const userInfoEditModalStore = create((set) => ({
  modalOpen: false,
  openModal: () =>
    set((state) => ({
      modalOpen: true,
    })),
  closeModal: () =>
    set((state) => ({
      modalOpen: false,
    })),
}));

// 글 등록페이지에서 등록 버튼을 클릭했을 때,
export const registerModalStore = create((set) => ({
  modalOpen2: false,
  openModal2: () =>
    set((state) => ({
      modalOpen2: true,
    })),
  closeModal2: () =>
    set((state) => ({
      modalOpen2: false,
    })),
}));

// 글 수정페이지에서 삭제 버튼을 클릭했을 떄,
export const registerDelModalStore = create((set) => ({
  modalOpen2: false,
  openModal2: () =>
    set((state) => ({
      modalOpen2: true,
    })),
  closeModal2: () =>
    set((state) => ({
      modalOpen2: false,
    })),
}));

// 글 수정페이지에서 수정 버튼을 클릭했을 때,
export const registerEditModalStore = create((set) => ({
  modalOpen: false,
  openModal: () =>
    set((state) => ({
      modalOpen: true,
    })),
  closeModal: () =>
    set((state) => ({
      modalOpen: false,
    })),
}));