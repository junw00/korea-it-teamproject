package com.team4.teamproject.domain.repository.comment;

import java.time.LocalDateTime;

import jakarta.validation.constraints.Email;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Comment {
	private String user_name;
	@Email
	private String user_email;
	private int user_code;
	private int comment_number;
	private int board_number;
	private String contents;
	private LocalDateTime write_datetime;
	
	
}
