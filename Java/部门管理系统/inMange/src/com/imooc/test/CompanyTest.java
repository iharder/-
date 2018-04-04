package com.imooc.test;
import com.imooc.model.Depart;
import com.imooc.model.Staff;

public class CompanyTest {
	public static void main(String[] args) {
//		打印所有员工数据			
		Staff staff1 = new Staff("张铭","S001","男",29,"人事部","经理");
		System.out.println(staff1.info());
		System.out.println("=========================");
		Staff staff2 = new Staff("李艾爱","S002","女",21,"人事部","助理");
		System.out.println(staff2.info());
		System.out.println("=========================");	
		Staff staff3 = new Staff("孙超","S004","男",29,"人事部","职员");
		System.out.println(staff3.info());
		System.out.println("=========================");
		Staff staff4 = new Staff("孙美美","S005","女",26,"人事部","职员");
		System.out.println(staff4.info());
		System.out.println("=========================");
		Staff staff5 = new Staff("蓝迪","S006","男",37,"人事部","经理");
		System.out.println(staff5.info());
		System.out.println("=========================");
		Staff staff6 = new Staff("米莉","S007","女",24,"人事部","职员");
		System.out.println(staff6.info());
		System.out.println("=========================");
//		设置部门对象
		Depart perManageDep = new Depart();
		Depart busManageDep = new Depart();
//		统计人事部人数
		perManageDep.addStaff(staff1);
		perManageDep.addStaff(staff2);
		perManageDep.addStaff(staff3);
		System.out.println("人事部总共有:" + perManageDep.getStaffNum()+"名员工");
//		统计事业部人数
		busManageDep.addStaff(staff4);
		busManageDep.addStaff(staff5);
		busManageDep.addStaff(staff6);
		System.out.println("市场部总共有:" + busManageDep.getStaffNum()+"名员工");

	}
}
