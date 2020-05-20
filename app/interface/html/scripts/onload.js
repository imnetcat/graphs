'use strict';

const SetUpPaletes = () => {
    const paletes = [];
    paletes.push(new Palete('background', Settings.background.color, Settings.SetBackgroundColor));
    paletes.push(new Palete('vertex', Settings.vertex.color, Settings.SetVertexColor));
    paletes.push(new Palete('lines_color', Settings.ribs.color, Settings.SetRibsColor));

    // �������������� ��� �������
    ColorPalete.Init(paletes);
    // �� ��������� ��������� ������ �������
    ColorPalete.Close('background');
    ColorPalete.Close('vertex');
    ColorPalete.Close('lines_color');
}

// ����������� ��������� �� ��������� ��������� ����� �������� ��������
document.addEventListener('DOMContentLoaded', () => {
    // �������������� �������� �������
    SetUpPaletes();

	// ��������� ��� ����
	Interface.menus.push(new Menu('settings'));
	Interface.menus.push(new Menu('properties'));
	Interface.menus.push(new Menu('algorithms'));
	Interface.menus.push(new Menu('definition'));

	// ������������� ���� ������� �� ���������
	Interface.Show('definition');

	// ��������� ������ �����
	Interface.refreshCanvas();
});

