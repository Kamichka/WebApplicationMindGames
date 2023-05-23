// �������� ������, ������� ��������� ����������� ����, � ���� ����������� ����
const openBtn = document.querySelector('.open-btn');
const popup = document.querySelector('.popup');


// �������� ������������ ����
openBtn.addEventListener('click', function () {
    popup.style.display = 'block';
});


// ��������� ����������� ����, ���� ������������ ������� �� ����� ������� ��� ����� ����
document.addEventListener('click', function (event) {
    // �� ������? ��� ����?
    if (!event.target.classList.contains('open-btn') && !event.target.classList.contains('number-btn')) {
        popup.style.display = 'none';
    }
});

