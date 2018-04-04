package com.imooc.model;

public class Depart {
	// 设置Staff数组
	private Staff[] myStaff;
	// 部门人数
	private int staffNum;

	// set、get方法

	public Staff[] getMyStaff() {
		if(this.myStaff== null) {
			this.myStaff = new Staff[200];
		}
		return myStaff;
	}

	public void setMyStaff(Staff[] myStaff) {	
		this.myStaff = myStaff;
	}

	public int getStaffNum() {
		return staffNum;
	}

	public void setStaffNum(int staffNum) {
		this.staffNum = staffNum;
	}

	

	//增加部门人数的方法
	public void addStaff(Staff sta) {
		for(int i = 0; i < this.getMyStaff().length; i++) {
			if(getMyStaff()[i] == null) {
//				双向互联
				sta.setDepart(this);
				this.getMyStaff()[i]=sta;
				this.staffNum++;
				return;
			}
		}
	}
}
