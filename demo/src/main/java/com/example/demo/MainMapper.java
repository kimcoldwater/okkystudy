package com.example.demo;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface MainMapper {

	public void boardInsert(MainVO mainVO) throws Exception;
	
	public List<MainVO> boardSelect() throws Exception;
	
	public void boardDelete(MainVO mainVO)throws Exception;
}
