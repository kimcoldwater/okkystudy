package com.example.demo;


import java.util.Date;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.Data;

@Data
public class MainVO {

	private String title;
	private String content;
	private String writer;
	
	@DateTimeFormat(pattern = "yyyy-MM-dd hh:mm:ss")
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd hh:mm:ss", timezone = "Asia/Seoul")
	private Date regdate;
	
}
