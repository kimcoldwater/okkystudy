package com.example.demo;

import java.util.List;

public interface MainService {

	public void boardInsert(MainVO mainVO) throws Exception;

	public List<MainVO> boardSelect() throws Exception;

	public void boardDelete(MainVO mainVO)throws Exception;

}
