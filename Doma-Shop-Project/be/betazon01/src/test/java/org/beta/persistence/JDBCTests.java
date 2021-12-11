package org.beta.persistence;


import static org.junit.Assert.fail;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import org.junit.Test;

import lombok.extern.log4j.Log4j;

@Log4j
public class JDBCTests {
	
	static {
		try {
			Class.forName("org.mariadb.jdbc.Driver");
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	@Test
	public void testConnection() {

		String url = "jdbc:mariadb://localhost:3306/my_db";
		String user = "user";
		String pw = "456123";
		
		try(Connection con = DriverManager.getConnection(
					url, 
					user, 
					pw)) {
			
			log.info("------" + con);
		} catch (Exception e) {
			fail(e.getMessage());
		}
	}
}
