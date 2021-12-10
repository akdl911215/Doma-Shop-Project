package org.beta.sample;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class JDBCTests {
	public static void main(String[] args) {
		Connection con = null;
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		
		try {
			Class.forName("org.mariadb.jdbc.Driver");
			
			con = DriverManager.getConnection("jdbc:mariadb://localhost:3306/my_db", 
												"user", 
												"456123");
			
			pstmt = con.prepareStatement("select * from member");
			
			rs = pstmt.executeQuery();
			
			while(rs.next()) {
				// . 
			} 
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			try {
				if(rs != null) {
					rs.close(); // ���� ����
				}
				
				if(pstmt != null) {
					pstmt.close(); // ���û��������� ȣ�� ��õ
				}
				
				if(con != null) {
					con.close(); // �ʼ� ����
				}
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
	}
}
