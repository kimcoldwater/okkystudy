package com.example.demo;


import java.util.Date;

import org.springframework.format.annotation.DateTimeFormat;

import lombok.Data;

@Data
public class MainVO {

	private String title;
	private String content;
	private String writer;
	
	@DateTimeFormat(pattern = "yyyy-MM-dd hh:mm:ss")
	private Date regdate;
	
}
