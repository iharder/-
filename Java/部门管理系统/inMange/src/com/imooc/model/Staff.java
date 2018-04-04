package com.imooc.model;

import javax.security.auth.Subject;

public class Staff {
	// 公司职员的姓名，工号，性别，年龄，部门，职位。
	private String staffName, staffJobNum, staffSex;
	private int staffAge;
	// 部门、职务属性
	private String staffDepart, staffOffice;
	// 公司部门的对象
	private Depart depart;

	public Depart getDepart() {
		return depart;
	}

	public void setDepart(Depart depart1) {
		this.depart = depart1;
	}

	// 各成员属性get、set方法。
	public String getStaffName() {
		return staffName;
	}

	public void setStaffName(String staffName) {
		this.staffName = staffName;
	}

	public String getStaffJobNum() {
		return staffJobNum;
	}

	public void setStaffJobNum(String staffJobNum) {
		this.staffJobNum = staffJobNum;
	}

	public String getStaffSex() {
		if (this.staffSex != "男" && this.staffSex != "女") {
			return "男";
		} else {
			return staffSex;
		}
	}

	public void setStaffSex(String staffSex) {
		this.staffSex = staffSex;
	}

	// 输入非法年龄的处理
	public int getStaffAge() {
		if (this.staffAge > 18 & this.staffAge < 65) {
			return staffAge;
		} else {
			return 18;
		}

	}

	public void setStaffAge(int staffAge) {
		this.staffAge = staffAge;
	}

	public String getStaffDepart() {
		return staffDepart;
	}

	public void setStaffDepart(String staffDepart) {
		this.staffDepart = staffDepart;
	}

	public String getStaffOffice() {
		return staffOffice;
	}

	public void setStaffOffice(String staffOffice) {
		this.staffOffice = staffOffice;
	}

	// 录入员工数据
	public Staff(String staffName, String staffJobNum, String staffSex, int staffAge, String staffDepart,
			String staffOffice/* ,Depart depart1 单向联系 */) {
		// 给成员属性赋值
		setStaffName(staffName);
		setStaffJobNum(staffJobNum);
		setStaffSex(staffSex);
		setStaffAge(staffAge);
		// setDepart(depart1);
		// 赋值部门属性
		setStaffDepart(staffDepart);
		setStaffOffice(staffOffice);
	}

	// 输出员工数据
	public String info() {
		System.out.println("姓名:" + getStaffName());
		System.out.println("工号:" + getStaffJobNum());
		System.out.println("性别:" + getStaffSex());
		System.out.println("年龄:" + getStaffAge());
		return "职务：" + getStaffDepart() + getStaffOffice();
	}

}
