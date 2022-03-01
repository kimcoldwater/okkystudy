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
	
	private Date regdate;
	
}
