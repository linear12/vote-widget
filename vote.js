document.addEventListener('DOMContentLoaded', function () {
  const voteButtons = document.querySelectorAll('.vote-button');
  voteButtons.forEach(button => {
    button.addEventListener('click', function () {
      const options = document.querySelectorAll('input[name="vote"]');
      let selected = null;
      options.forEach(opt => {
        if (opt.checked) selected = opt.value;
      });

      if (selected) {
        alert(`당신의 선택: ${selected}\n(※ 실제 저장은 되지 않습니다)`);
        // 나중엔 여기서 fetch()로 GitHub API나 다른 서버에 저장 가능
      } else {
        alert('선택지를 먼저 골라주세요!');
      }
    });
  });
});
